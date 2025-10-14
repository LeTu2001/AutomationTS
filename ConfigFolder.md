# AI Agent Instructions for AutomationTS

Đây là dự án automation testing sử dụng CodeceptJS với Playwright làm framework chính, viết bằng TypeScript và tuân theo phương pháp Behavior-Driven Development (BDD).

## Cấu Trúc Dự Án

```
├── features/               # Chứa các file feature Gherkin (.feature)
│   ├── TestExceptions/    # Test cases cho xử lý ngoại lệ
│   └── TestLogin/         # Test cases cho chức năng đăng nhập
├── step_definitions/      # Chứa các file định nghĩa step trong Gherkin
│   ├── assets/           # Tài nguyên cho testing
│   └── steps/            # Step definitions cho từng feature
├── output/               # Chứa logs, screenshots và báo cáo test
├── codecept.conf.ts      # File cấu hình chính của CodeceptJS
└── steps.d.ts           # TypeScript definitions cho các steps
```

## Quy Ước Và Mẫu

### Feature Files
- Đặt trong thư mục `features/` với cấu trúc phân cấp theo chức năng
- Sử dụng định dạng `.feature` và viết theo cú pháp Gherkin
- Mỗi feature file tập trung vào một chức năng cụ thể

Ví dụ từ `features/TestLogin/TestLoginpage.feature`:
```gherkin
Feature: Đăng nhập
  Scenario: Đăng nhập thành công
    Given người dùng ở trang đăng nhập
    When người dùng nhập thông tin đăng nhập hợp lệ
    Then người dùng được chuyển đến trang chủ
```

### Step Definitions
- Đặt trong `step_definitions/steps/`
- Tên file phải kết thúc bằng `_test.ts`
- Mỗi file chứa các step definitions liên quan đến một feature

## Workflow

### Chạy Tests
- Test một feature cụ thể: `yarn dev features/[FeatureFolder]/[FeatureName].feature`
- Ví dụ: `yarn dev features/TestLogin/TestLoginpage.feature`

### Debug Tests
- Tests có thể được chạy với UI browser hiện thị (đã cấu hình sẵn)
- Screenshot và logs được lưu trong thư mục `output/`

## Phụ Thuộc Chính
- CodeceptJS: Framework testing chính
- Playwright: Tool automation browser
- TypeScript: Ngôn ngữ lập trình
- Gherkin: Ngôn ngữ đặc tả hành vi

## Lưu Ý Quan Trọng
1. Luôn đảm bảo môi trường có NodeJS phiên bản mới nhất
2. Chạy `npm install` hoặc `yarn install` sau khi clone repository
3. Kiểm tra file `codecept.conf.ts` cho các cấu hình cụ thể của dự án
4. Tuân thủ cấu trúc BDD khi viết test cases mới