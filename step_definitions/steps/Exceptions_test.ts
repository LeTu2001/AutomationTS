import assert from "assert";
const { I } = inject();

When(
  "{string} Tôi nhìn thấy đầy đủ màn hình Test Exceptions",
  async (testcase: string) => {
    I.see(`Test Exceptions`);
    assert.equal(
      await I.grabTextFrom(`(//section[@id='food_list']/p)[1]`),
      "This page is created to be able to reproduce the most common Selenium Exceptions. Follow test cases below to see exactly how to get: ElementNotInteractableException, ElementNotVisibleException, NoSuchElementException and StaleElementReferenceException. If you want to learn how to deal with these exceptions in your tests, check out my Selenium WebDriver with Java for beginners program."
    );
  }
);

When(
  "{string} Tôi nhấn nút {string} của Row{int} trong màn Test Exceptions",
  (testcase: string, btn: string, id: number) => {
    I.see(`Test Exceptions`);
    var tmp;
    switch (btn) {
      case "Edit":
        tmp = `//div[@id='row${id}']/button[@id='edit_btn']`;
        break;
      case "Add":
        tmp = `//div[@id='row${id}']/button[@id='add_btn']`;
        break;
      case "Save":
        tmp = `//div[@id='row${id}']/button[@id='save_btn']`;
        break;
      case "Remove":
        tmp = `//div[@id='row${id}']/button[@id='remove_btn']`;
        break;
      default:
        break;
    }
    I.click(tmp);
  }
);

When(
  "{string} Tôi nhìn thấy Row2 có xuất hiện trong màn TestExceptions",
  async (testcase: string) => {
    I.waitForVisible(`//div[@id='loading']`, 5);
    assert.equal(await I.grabTextFrom(`//div[@id='loading']`), "Loading… ");
    assert.equal(
      await I.grabAttributeFrom(`//div[@id='loading']/img`, "src"),
      "https://i0.wp.com/cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif?ssl=1"
    );
    I.waitForVisible("//div[@id='row2']/label", 10);
    assert.equal(await I.grabTextFrom(`//div[@id='row2']/label`), "Row 2");
    assert.equal(
      await I.grabTextFrom(`//div[@id='confirmation']`),
      "Row 2 was added"
    );
  }
);

When(
  "{string} Tôi nhìn thấy nút Save ở Row1 disable và chỉ có nút Save ở Row2",
  async (testcase: string) => {
    I.waitForInvisible(`//div[@id='row1']/button[@name='Save']`, 10);
    I.waitForVisible(`//div[@id='row2']/button[@name='Save']`, 10);
    assert.equal(
      await I.grabTextFrom(`//div[@id='row2']/button[@name='Save']`),
      "Save"
    );
  }
);

var memorytext;
When(
  "{string} Tôi nhập {string} Row{int} trong màn Test Exceptions",
  async (testcase: string, input: string, id: number) => {
    I.clearField(`//div[@id='row${id}']/input`);
    I.fillField(`//div[@id='row${id}']/input`, input);
    I.click(`//div[@id='row${id}']/button[@id='save_btn']`);
    memorytext = await I.grabAttributeFrom(
      `//div[@id='row${id}']/input`,
      "value"
    );
    assert.equal(
      await I.grabTextFrom(`//div[@id='confirmation']`),
      `Row ${id} was saved`
    );
  }
);

When(
  "{string} Tôi nhìn thấy text của Row{int} vừa thay đổi chính xác",
  async (testcase: string, id: number) => {
    assert.equal(
      await I.grabAttributeFrom(`//div[@id='row${id}']/input`, "value"),
      memorytext
    );
  }
);
When("{string} Tôi chờ {int} giây", (testcase: string, time: number) => {
  I.wait(time);
});

When("{string} Tôi nhìn thấy Row2 có hiển thị", async (testcase: string) => {
  I.waitForVisible(`//div[@id='row2']`, 3);
});
