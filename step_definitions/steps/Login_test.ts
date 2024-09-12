import assert from "assert";
const { I } = inject();

When(
  "{string} Tôi đăng nhập vào trang web {string}",
  (testcase: string, web: string) => {
    I.amOnPage(web);
  }
);

When(
  "{string} Tôi nhấn vào {string} trong màn Practice",
  (testcase: string, text: string) => {
    I.waitForVisible(`//a[text()='${text}']`, 10);
    I.click(`//a[text()='${text}']`);
  }
);

When(
  "{string} Tôi nhìn thấy đầy đủ màn hình Testlogin",
  async (testcase: string) => {
    I.see("Test login");
    assert.equal(
      await I.grabTextFrom("(//section[@id='login']/ul/li)[1]"),
      "This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate."
    );
  }
);

When(
  "{string} Tôi nhập {string} trong trường {string} trong màn Testlogin",
  (testcase: string, input: string, button: string) => {
    I.clearField(`//input[@id='${button}']`);
    I.fillField(`//input[@id='${button}']`, input);
  }
);

When("{string} Tôi nhấn nút Submit trong màn Testlogin", (testcase: string) => {
  I.waitForVisible(`//button[@id='submit']`, 5);
  I.click(`//button[@id='submit']`);
});

When(
  "{string} Tôi kiểm tra URl {string}",
  async (testcase: string, Url: string) => {
    var UrlCurrent = await I.grabCurrentUrl();
    assert.equal(UrlCurrent, Url);
  }
);

When(
  "{string} Tôi kiểm tra text {string} trong màn Logged In Successfully",
  async (testcase: string, txt: string) => {
    I.see("Logged In Successfully");
    assert.equal(
      await I.grabTextFrom(
        "//strong[text()='Congratulations student. You successfully logged in!']"
      ),
      txt
    );
  }
);
When(
  "{string} Tôi nhấn Logout trong màn LoggedInSuccessfully",
  (testcase: string) => {
    I.waitForVisible(`//a[text()='Log out']`, 5);
    I.click(`//a[text()='Log out']`);
  }
);

When(
  "{string} Tôi nhìn thấy trường thông báo lỗi {string} trong màn Testlogin",
  async (testcase: string, txtError: string) => {
    I.see("Test login");
    assert.equal(await I.grabTextFrom(`//div[@id='error']`), txtError);
  }
);
