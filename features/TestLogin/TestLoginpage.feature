Feature: TestLoginPage
    Tôi kiểm thử cho trang web testAutomation: https://practicetestautomation.com/practice-test-login/

    Scenario: Test case 1: Positive LogIn test
        Given "" Tôi đăng nhập vào trang web "https://practicetestautomation.com/practice/"
        When "" Tôi nhấn vào "Test Login Page" trong màn Practice
        And "" Tôi nhìn thấy đầy đủ màn hình Testlogin
        And "" Tôi nhập "student" trong trường "username" trong màn Testlogin
        And "" Tôi nhập "Password123" trong trường "password" trong màn Testlogin
        And "" Tôi nhấn nút Submit trong màn Testlogin
        And "" Tôi kiểm tra URl "https://practicetestautomation.com/logged-in-successfully/"
        And "" Tôi kiểm tra text "Congratulations student. You successfully logged in!" trong màn Logged In Successfully
        Then "" Tôi nhấn Logout trong màn LoggedInSuccessfully

    Scenario: Test case 2: Negative username test
        Given "" Tôi đăng nhập vào trang web "https://practicetestautomation.com/practice/"
        When "" Tôi nhấn vào "Test Login Page" trong màn Practice
        And "" Tôi nhìn thấy đầy đủ màn hình Testlogin
        And "" Tôi nhập "incorrectUser" trong trường "username" trong màn Testlogin
        And "" Tôi nhập "Password123" trong trường "password" trong màn Testlogin
        And "" Tôi nhấn nút Submit trong màn Testlogin
        And "" Tôi nhìn thấy trường thông báo lỗi "Your username is invalid!" trong màn Testlogin

    Scenario: Test case 3: Negative password test
        Given "" Tôi đăng nhập vào trang web "https://practicetestautomation.com/practice/"
        When "" Tôi nhấn vào "Test Login Page" trong màn Practice
        And "" Tôi nhìn thấy đầy đủ màn hình Testlogin
        And "" Tôi nhập "student" trong trường "username" trong màn Testlogin
        And "" Tôi nhập "incorrectPassword" trong trường "password" trong màn Testlogin
        And "" Tôi nhấn nút Submit trong màn Testlogin
        And "" Tôi nhìn thấy trường thông báo lỗi "Your password is invalid!" trong màn Testlogin
