sap.ui.define(["./BaseController"], function (__BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace com.template.controller
   */


  const NotFound = BaseController.extend("com.template.controller.NotFound", {
    onInit: function _onInit() {
      this.getRouter().getTarget("notFound").attachDisplay(() => this.onNotFoudnDisplayed());
    },
    onNotFoudnDisplayed: function _onNotFoudnDisplayed() {
      this.getModel("appView").setProperty("/layout", "OneColumn");
    }
  });
  return NotFound;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL05vdEZvdW5kLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiQmFzZUNvbnRyb2xsZXIiLCJOb3RGb3VuZCIsIm9uSW5pdCIsImdldFJvdXRlciIsImdldFRhcmdldCIsImF0dGFjaERpc3BsYXkiLCJvbk5vdEZvdWRuRGlzcGxheWVkIiwiZ2V0TW9kZWwiLCJzZXRQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFT0EsYztBQUVQO0FBQ0E7QUFDQTs7O1FBQ3FCQyxRLEdBQWlCRCxjO0FBQzlCRSxJQUFBQSxNLHFCQUFhO0FBQ2xCLFdBQUtDLFNBQUwsR0FBaUJDLFNBQWpCLENBQTJCLFVBQTNCLENBQUQsQ0FBbURDLGFBQW5ELENBQWlFLE1BQUksS0FBS0MsbUJBQUwsRUFBckU7QUFDQSxLO0FBQ09BLElBQUFBLG1CLGtDQUFxQjtBQUMzQixXQUFLQyxRQUFMLENBQWMsU0FBZCxDQUFELENBQXdDQyxXQUF4QyxDQUFvRCxTQUFwRCxFQUE4RCxXQUE5RDtBQUNBOztTQU5tQlAsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXJnZXQgZnJvbSBcInNhcC91aS9jb3JlL3JvdXRpbmcvVGFyZ2V0XCI7XHJcbmltcG9ydCBKU09OTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9qc29uL0pTT05Nb2RlbFwiO1xyXG5pbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZXNwYWNlIGNvbS50ZW1wbGF0ZS5jb250cm9sbGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIEJhc2VDb250cm9sbGVye1xyXG5cdHB1YmxpYyBvbkluaXQoKTp2b2lke1xyXG5cdFx0KHRoaXMuZ2V0Um91dGVyKCkuZ2V0VGFyZ2V0KFwibm90Rm91bmRcIikgYXMgVGFyZ2V0KS5hdHRhY2hEaXNwbGF5KCgpPT50aGlzLm9uTm90Rm91ZG5EaXNwbGF5ZWQoKSk7XHJcblx0fVxyXG5cdHByaXZhdGUgb25Ob3RGb3VkbkRpc3BsYXllZCgpe1xyXG5cdFx0KHRoaXMuZ2V0TW9kZWwoXCJhcHBWaWV3XCIpIGFzIEpTT05Nb2RlbCkuc2V0UHJvcGVydHkoXCIvbGF5b3V0XCIsXCJPbmVDb2x1bW5cIik7XHJcblx0fVxyXG59Il19