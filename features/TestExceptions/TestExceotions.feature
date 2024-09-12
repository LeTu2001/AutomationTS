Feature: TestExceptions
    Tôi kiểm thử cho trang web testAutomation: https://practicetestautomation.com/practice-test-login/

    Scenario: Test case 1: NoSuchElementException
        Given "" Tôi đăng nhập vào trang web "https://practicetestautomation.com/practice/"
        When "" Tôi nhấn vào "Test Exceptions" trong màn Practice
        And "" Tôi nhìn thấy đầy đủ màn hình Test Exceptions
        And "" Tôi nhấn nút "Add" của Row1 trong màn Test Exceptions
        And "" Tôi nhìn thấy Row2 có xuất hiện trong màn TestExceptions

    Scenario: Test case 2: NoSuchElementException
        Given "" Tôi đăng nhập vào trang web "https://practicetestautomation.com/practice/"
        When "" Tôi nhấn vào "Test Exceptions" trong màn Practice
        And "" Tôi nhìn thấy đầy đủ màn hình Test Exceptions
        And "" Tôi nhấn nút "Add" của Row1 trong màn Test Exceptions
        And "" Tôi nhìn thấy Row2 có xuất hiện trong màn TestExceptions
        And "" Tôi nhìn thấy nút Save ở Row1 disable và chỉ có nút Save ở Row2

    Scenario: Test case 3: InvalidElementStateException
        Given "" Tôi đăng nhập vào trang web "https://practicetestautomation.com/practice/"
        When "" Tôi nhấn vào "Test Exceptions" trong màn Practice
        And "" Tôi nhìn thấy đầy đủ màn hình Test Exceptions
        And "" Tôi nhấn nút "Edit" của Row1 trong màn Test Exceptions
        And "" Tôi nhập "EditTest" Row1 trong màn Test Exceptions
        And "" Tôi nhìn thấy text của Row1 vừa thay đổi chính xác

    Scenario: Test case 4: TimeoutException
        Given "" Tôi đăng nhập vào trang web "https://practicetestautomation.com/practice/"
        When "" Tôi nhấn vào "Test Exceptions" trong màn Practice
        And "" Tôi nhìn thấy đầy đủ màn hình Test Exceptions
        And "" Tôi nhấn nút "Add" của Row1 trong màn Test Exceptions
        And "" Tôi nhìn thấy Row2 có xuất hiện trong màn TestExceptions
        And "" Tôi nhìn thấy Row2 có hiển thị