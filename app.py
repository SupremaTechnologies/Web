from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="assets", static_url_path="/assets")

@app.route("/")
def home():
    # 直接送根目錄下的 index.html
    return send_from_directory(".", "index.html")

# 新增一個 route 來處理其他 HTML 頁面 (例如 about.html, contact.html)
@app.route("/<path:name>")
def serve_file(name):
    return send_from_directory(".", name)

# 方便健康檢查
@app.route("/health")
def health():
    return "ok", 200

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
