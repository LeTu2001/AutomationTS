# NodeJS
- NodeJS là một môi trường chạy JavaScript ở phía máy chủ

### Để có thể chạy dự án thì chúng ta cần phải NodeJS về cho máy

- Chúng ta sẽ cài nodejs. Hãy tìm phiên bản mới nhất của Nodejs [Tại Đây](https://nodejs.org/en/download/package-manager)
- Sau đó chúng ta sẽ kiểm tra NodeJs thành công bằng cách bật terminal và gõ câu lệnh
```
node --version
```

# CodeceptJS

## Giới thiệu

CodeceptJS là một framework kiểm thử end-to-end hiện đại cho các ứng dụng web. Nó đơn giản hóa quá trình viết và thực thi các bài kiểm thử tự động bằng cách sử dụng cú pháp dễ đọc và dễ hiểu.

## Tính năng chính
- **Đa nền tảng**: Hỗ trợ nhiều trình điều khiển như Playwright, Puppeteer, WebDriver, và TestCafe.
- **Cú pháp BDD**: Viết các kịch bản kiểm thử bằng ngôn ngữ tự nhiên.
- **Tích hợp AI**: Sử dụng CodeceptJS AI để tạo và duy trì các bài kiểm thử.
- **Báo cáo trực quan**: Tạo báo cáo chi tiết với ảnh chụp màn hình và video.
- **Chạy song song**: Thực thi các bài kiểm thử đồng thời để tiết kiệm thời gian.
- **Mở rộng**: Dễ dàng tùy chỉnh và mở rộng thông qua các plugin và helper.

*Sau khi clone repository, chúng ta sẽ chạy* 
  ``` 
  npm install
  ```` 
  and

  ```
  yarn install
  ```
*Test chạy thử nghiệm*
  
  ```
  yarn dev features/TestLogin/TestLoginpage.feature 
  ```
## Để khởi tạo một dự án Automation bằng CodeceptJS Playwright
Khởi tạo nhanh dự án Nodejs
```
npm init -y
```
Bắt đầu một dự án sử dụng CodeceptJS với Playwright làm framework
```
npm install codeceptjs playwright
```
Khởi tạo codeceptjs
```
npx codeceptjs init
```
Bạn cần trả lời một số câu hỏi trước khi kết thúc khởi tạo:

? Where are your tests located? (./*_test.js) 

 👉 Các bài test sẽ nằm ở đâu, mình để mặc định và enter

? What helpers do you want to use? (Use arrow keys)

 👉 Helpers nào bạn muốn sử dụng (mặc định là Playwright) 

? Where should logs, screenshots, and reports to be stored? (./output) 

 👉 Bạn muốn lưu trữ các lỗi , ảnh capture và các báo cáo ở đâu, mình để mặc định (thư mục output) và enter

? Do you want localization for tests? (See https://codecept.io/translation/) (Use arrow keys)

 👉 Bạn có muốn bản địa hoá cho các bài tests, mình để mặc định là English

? [Playwright] Base url of site to be tested (http://localhost) 

 👉 Đường dẫn của website sẽ cần được kiểm tra, mình để mặc định là localhost, tuy nhiên các bạn có thể thay thế bằng các đường dẫn khác (ex: https://github.com, https://techmaster.vn, ...)

? [Playwright] Show browser window (Y/n) 
 👉 Hiển thị cửa sổ trình duyệt, nhấn Y (hoặc Yes) và enter

? [Playwright] Browser viewport size (1200x900) 
 👉 Kích thước cửa sổ trình duyệt, mình để mặc định và enter, các bạn có thể sử dụng các kích thước khác nhau.

Tạo một bài test:
----------------------
? Feature which is being tested (ex: account, login, etc): (Filename)

? Filename of a test (Login_test.ts) 

## Gherkin

**Gherkin** là một ngôn ngữ viết kịch bản dành cho việc mô tả hành vi của phần mềm theo định dạng dễ hiểu cho cả những người không có kỹ năng lập trình. Nó được sử dụng trong Behavior-Driven Development (BDD) để viết các bài kiểm thử (test cases) dựa trên cách người dùng tương tác với hệ thống.

```
Feature: Đăng nhập vào trang web

  Scenario: Đăng nhập thành công với tài khoản hợp lệ
    Given người dùng ở trang đăng nhập
    When người dùng nhập tên đăng nhập "user1" và mật khẩu "password1"
    Then người dùng sẽ được chuyển đến trang chủ
```
Để có thể viết 1 kịch bản dưới dạng BDD thì chúng ta phải thêm trong file (codecept.conf.ts)

``` typescript
import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./*_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost",
      show: true,
      chromium: {
        args: [
          '--disable-extensions',
          '--disable-gpu',
          '--no-sandbox',
          '--disable-dev-shm-usage'
        ]
      }
    },
  },
  multiple: {
    basic: {
      browsers: ["chromium", "firefox"],
    },
  },
  include: {
    I: "./steps_file",
  },
  name: "AutomationJS",
  gherkin: {
    features: "./features/**/*.feature",
    steps: "./step_definitions/**/*.ts",
  },
};

```
Đây là cấu hình cho Gherkin trong CodeceptJS:

- gherkin: Đây là phần cấu hình cho việc sử dụng Gherkin trong dự án.
- features:
- Đường dẫn: "./features/**/*.feature"
Ý nghĩa: Chỉ định vị trí của các file feature Gherkin.
Cú pháp **/*.feature cho phép tìm kiếm tất cả các file có đuôi .feature trong thư mục features và các thư mục con của nó.
- steps:
Đường dẫn: "./step_definitions/**/*.ts"
Ý nghĩa: Chỉ định vị trí của các file định nghĩa bước (step definitions).
Tìm kiếm tất cả file TypeScript (.ts) trong thư mục step_definitions và các thư mục con.

Sau khi khởi tạo codecept thành công, các bạn sẽ thấy cấu trúc thư mục như sau:

![](./step_definitions/assets/img1.png)


# Allure
**Allure** là một framework mã nguồn mở được thiết kế để tạo ra các báo cáo kiểm thử tự động có tính tương tác cao và dễ đọc.

## Windowns
 Để cài được allure codeceptjs playwright điều kiện phải có JAVA_HOME

 Nếu chưa có thì chúng ta sẽ cài theo video hướng dẫn [Tại đây](https://www.youtube.com/watch?v=szRwhUl0awE&t=345s)

 Sau khi đã có JAVA_HOME chúng ta sẽ bắt đầu cài đặt Allure và sẽ làm tương tự như JAVA_HOME [Tại đây](https://github.com/allure-framework/allure-java/releases)

Ở phần Variable Name chúng ta ghi tên ALLURE_Home 

Ở phần Variable value chúng ta gán địa chỉ jdk như ở mục 2 

Tiếp theo chúng phải đăng ký biến ALLURE vào Path, chọn Path ở System varibles chọn New, sau đó thêm %ALLURE_HOME%\bin chúng ta hoàn tất  hết trong cài đặt System properties 

Để biết chúng ta đã cài thành công thì chúng ta vào Cmd(Command Prompt) gõ 
``` 
Allure --version
```
### Cài đặt

Chúng ta vào trình soạn thảo mã nguồn (hiện tại chúng ta sẽ đang dùng VSCODE)

```
npm install -g allure-commandline --save-dev 
```
dòng lệnh trên được sử dụng để cài đặt Allure Command Line Interface (CLI) trong môi trường Node.js

![](./step_definitions/assets/install_allure.png)

Thư viện **allure-legacy**:
```
npm install @codeceptjs/allure-legacy --save-dev
```

Vào thư mục codeceptjs.conf.js để cấu hình cho allure

``` typescript

plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./output/allure",
      useCucumberStepReporter: true,
    },
  },

```
- enabled: true: Kích hoạt plugin Allure.
- require: '@codeceptjs/allure-legacy': Chỉ định module cần sử dụng cho Allure, ở đây là phiên bản legacy.
- outputDir: './output/allure': Đường dẫn thư mục để lưu trữ kết quả báo cáo Allure.
- useCucumberStepReporter: true: Kích hoạt tính năng báo cáo theo từng bước của Cucumber, hữu ích khi sử dụng BDD (Behavior-Driven Development).

Chúng ta sẽ chạy tất cả các bản test để tạo 1 báo 
```
npx codeceptjs run --plugins allure
```
Sever Allure
```
allure serve output
```
- chúng ta sẽ bật serve mà trỏ đến thư mục chưa các file.xml

![](./step_definitions/assets/file.xml.png)

## Lưu ý

Để có thể commit or sync lên GitHub, chúng ta phải kiểm tra file mình clone về bằng đi đến thư mục đó
 
 ```
 cd <Tên thư mục>
 ```
Kiểm tra thư mục

(kiểm tra tất cả các thư mục, cả thư mục bị ẩn đi)
 ```
 ls -a 
 ```
 Lấy thư mục .git là ngoài thư mục chính
 ```
 mv .git ..
 ```

 Sau đó chúng ta có thể Commit or Sync lên trên Github

 ## Khởi động 
``` sh 
"scripts": {
  "dev": "npx codeceptjs run --verbose --features",
  "prod": "npx codeceptjs run --features --plugins allure" },
```
- *"dev"*: "npx codeceptjs run --verbose --features": lệnh chạy bài kiểm tra nhanh dưới tên script trong file packega.json
(vd: yarn dev features/TestLogin/TestLoginpage.feature)

- *"prod"*: "npx codeceptjs run --features --plugins allure": lệnh chạy tất cả các bài kiểm tra để tạo các file báo cáo dưới dạng file .xml dưới tên script trong file packega.json
(vd: yarn prod)

-------------------------------------------------------------------------------
Nếu sử dụng IDE VSCode, có một số tiện ích mở rộng bạn có thể dùng:
-------------------------------------------------------------------------------
- Cucumber (Gherkin) Full Support 
  + ID: alexkrechik.cucumberautocomplete
  + Mô tả: Hỗ trợ đầy đủ ngôn ngữ Cucumber (Gherkin) cho VSCode Support + Formatting +      Autocomplete Version: 2.15.2 Publisher  
  + Liên kết VS Marketplace: https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete

- Prettier - Code formatter 
  + ID: esbenp.prettier-vscode
  + Mô tả: Công cụ định dạng code sử dụng prettier
  + Phiên bản: 9.13.0
  + Nhà phát hành: Prettier
  + Liên kết VS Marketplace: https://marketplace.visualstudio.com/items?itemName=esbenp.    prettier-vscode
- Prettier ESLint
  + ID: rvest.vs-code-prettier-eslint
  + Mô tả: Tiện ích mở rộng Visual Studio để định dạng code JavaScript và TypeScript sử dụng gói prettier-eslint
   + Phiên bản: 5.1.0
   + Nhà phát hành: Rebecca Vest 
   + Liên kết VS Marketplace: https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint
- Prettier ESLint TypeScript Formatter
  + ID: hb432.prettier-eslint-typescript
  + Mô tả: Định dạng code TypeScript thông qua Prettier, sau đó qua ESLint.
  + Phiên bản: 1.0.5
  + Nhà phát hành: Harrison Smith
  + Liên kết VS Marketplace: https://marketplace.visualstudio.com/items?itemName=hb432.prettier-eslint-typescript

## Tài liệu

Để biết thêm thông tin chi tiết, vui lòng tham khảo [tài liệu chính thức](https://codecept.io/helpers/Playwright/#playwright).
