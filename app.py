from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="static", static_url_path="/static")

@app.route("/")
def home():
    # 直接送根目錄下的 index.html（純 HTML，不用 Jinja）
    return send_from_directory(".", "index.html")

# 方便健康檢查
@app.route("/health")
def health():
    return "ok", 200

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
