# Lab-Website

## 開發者指南

本指南說明如何將新的專案添加到網站的首頁 (Home Page)、服務頁面 (Service Page) 以及子項目頁面 (Project Page)。  
🙂🙃🙂🙃🙂🙃  
歡迎把首頁的架構更改、美化  
教授說內容不能有我們學校、實驗室的資訊，好像是最後要放到一間公司的網站底下  
有Bugs或錯字的話希望您可以跟我講一下或自行修改  
以下內容皆為AI生成，如有錯誤請自行判斷  
🙂🙃🙂🙃🙂🙃  

### 1. 首頁 (Home Page) 修改指南

**檔案位置:** `index.html`

各計畫負責人員須完成以下兩項工作：

1.  **新增 Services 區塊連結**:
    請在 "OUR SERVICES" 區塊 (`<section class="service-area">`) 中，提供一個如 SOC 的小圖片並連結至您的網頁。
    請找到 `<div class="service-box">` -> `<div class="row">`，並在其中新增一個 `col-lg-6 col-sm-6` 的區塊。

    **程式碼範例:**
    ```html
    <div class="col-lg-6 col-sm-6">
        <!-- 將 href 替換為您的專案連結 -->
        <a href="YOUR_PROJECT_PAGE.html">
            <div class="single-service-box border-right mt-5 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                <div class="service-img" style="height: 450px;">
                    <!-- 建議圖片設定 style="height: 100%; object-fit: cover;" 以保持版面整齊 -->
                    <img src="assets/img/YOUR_IMAGE.png" alt="img" style="height: 100%; object-fit: cover;">
                </div>
                <div class="service-text d-flex align-items-center">
                    <!-- 設定您的圖示與標題 -->
                    <img src="assets/img/YOUR_ICON.svg" alt="icon">
                    <h3>YOUR PROJECT TITLE</h3>
                </div>
                <span></span>
            </div>
        </a>
    </div>
    ```

2.  **新增導覽列 (Navbar) 連結**:
    請在頁面上方的導覽列 "Service" 頁籤下拉選單中，新增一個指向您網頁的連結。

### 2. 服務頁面 (Service Page) 修改指南

**檔案位置:** `service.html`

修改方式與首頁類似，請在專案列表區塊中新增您的專案。

請找到 `<div class="project-box">` 區塊 (通常位於 `<div class="tab-pane fade show active" id="home">` 內)，並直接在其中新增一個 `<a>` 標籤區塊。

**程式碼範例:**

```html
<!-- 將 href 替換為您的專案連結 -->
<a href="YOUR_PROJECT_PAGE.html" class="single-project-box">
    <div class="single-project-img" style="height: 450px;">
        <!-- 建議圖片高度設定為 450px -->
        <img src="assets/img/YOUR_IMAGE.png" alt="img">
    </div>
    <div class="project-category">
        <ul>
            <li><img src="assets/img/service-1.svg" alt="img"></li>
            <li>
                <p>YOUR TEAM NAME / CATEGORY</p>
            </li>
        </ul>
    </div>
    <div class="project-info">
        <h3>YOUR PROJECT TITLE</h3>
        <p>Short Description</p>
    </div>
</a>
```

### 3. 子項目頁面 (Project Page) 修改指南

**檔案位置:** `project.html`

若您的計畫包含子項目 (Sub-projects)，請在此頁面進行新增。

1.  **新增子項目展示**:
    請在頁面中新增您的子項目區塊。

2.  **新增導覽列 (Navbar) 連結**:
    請在頁面上方的導覽列 "Sub-Product" 頁籤下拉選單中，新增指向此頁面或特定子項目的連結。

### 注意事項

- 目前專案中的子項目產品頁面尚未建構完成，請開發者在連結時留意，或暫時連結至 `service-details.html` 作為範例。

