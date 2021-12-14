sap.ui.define(["./BaseController", "sap/ui/Device", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/ui/model/Sorter"], function (__BaseController, sap_ui_Device, Filter, FilterOperator, Sorter) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const BaseController = _interopRequireDefault(__BaseController);

  const system = sap_ui_Device["system"];

  /**
   * @namespace com.template.controller
   */
  const Master = BaseController.extend("com.template.controller.Master", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.descendingSort = false;
    },
    onInit: function _onInit() {},
    onMasterMatched: function _onMasterMatched() {
      this.getModel("appView").setProperty("/layout", "OneColumn");
    },
    onListItemPress: async function _onListItemPress(event) {
      const bReplace = !system.phone,
            id = event.getSource().getBindingContext().getProperty("ID"),
            helper = await this.getOwnerComponent().getHelper(),
            oNextUIState = helper.getNextUIState(1);
      this.getRouter().navTo("detail", {
        id: id,
        layout: oNextUIState.layout
      }, {}, bReplace);
    },
    onSearch: function _onSearch(event) {
      let tableSearchState = [],
          query = event.getParameter("query");

      if (query && query.length > 0) {
        tableSearchState = [new Filter("Name", FilterOperator.Contains, query)];
      }

      this.getView().byId("productsTable").getBinding("items").filter(tableSearchState, "Application");
    },
    onSort: function _onSort(event) {
      this.descendingSort = !this.descendingSort;
      const view = this.getView(),
            table = view.byId("productsTable"),
            binding = table.getBinding("items"),
            sorter = new Sorter("Name", this.descendingSort);
      binding.sort(sorter);
    }
  });
  return Master;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL01hc3Rlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIkJhc2VDb250cm9sbGVyIiwic3lzdGVtIiwiTWFzdGVyIiwiZGVzY2VuZGluZ1NvcnQiLCJvbkluaXQiLCJvbk1hc3Rlck1hdGNoZWQiLCJnZXRNb2RlbCIsInNldFByb3BlcnR5Iiwib25MaXN0SXRlbVByZXNzIiwiZXZlbnQiLCJiUmVwbGFjZSIsInBob25lIiwiaWQiLCJnZXRTb3VyY2UiLCJnZXRCaW5kaW5nQ29udGV4dCIsImdldFByb3BlcnR5IiwiaGVscGVyIiwiZ2V0T3duZXJDb21wb25lbnQiLCJnZXRIZWxwZXIiLCJvTmV4dFVJU3RhdGUiLCJnZXROZXh0VUlTdGF0ZSIsImdldFJvdXRlciIsIm5hdlRvIiwibGF5b3V0Iiwib25TZWFyY2giLCJ0YWJsZVNlYXJjaFN0YXRlIiwicXVlcnkiLCJnZXRQYXJhbWV0ZXIiLCJsZW5ndGgiLCJGaWx0ZXIiLCJGaWx0ZXJPcGVyYXRvciIsIkNvbnRhaW5zIiwiZ2V0VmlldyIsImJ5SWQiLCJnZXRCaW5kaW5nIiwiZmlsdGVyIiwib25Tb3J0IiwidmlldyIsInRhYmxlIiwiYmluZGluZyIsInNvcnRlciIsIlNvcnRlciIsInNvcnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQU9BLGM7O1FBQ0VDLE07O0FBV1Q7QUFDQTtBQUNBO1FBQ3FCQyxNLEdBQWVGLGM7OztXQUMzQkcsYyxHQUFpQixLOztBQUNsQkMsSUFBQUEsTSxxQkFBZSxDQUNyQixDO0FBRU9DLElBQUFBLGUsOEJBQWtCO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBYyxTQUFkLENBQUQsQ0FBd0NDLFdBQXhDLENBQW9ELFNBQXBELEVBQStELFdBQS9EO0FBQ0EsSztBQUNhQyxJQUFBQSxlLGtDQUFnQkMsSyxFQUFnQztBQUM3RCxZQUFNQyxRQUFRLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDVSxLQUF6QjtBQUFBLFlBQ0NDLEVBQUUsR0FBS0gsS0FBSyxDQUFDSSxTQUFOLEVBQUQsQ0FBc0NDLGlCQUF0QyxHQUEwREMsV0FBMUQsQ0FBc0UsSUFBdEUsQ0FEUDtBQUFBLFlBRUNDLE1BQU0sR0FBRyxNQUFPLEtBQUtDLGlCQUFMLEVBQUQsQ0FBd0NDLFNBQXhDLEVBRmhCO0FBQUEsWUFHQ0MsWUFBWSxHQUFJSCxNQUFNLENBQUNJLGNBQVAsQ0FBc0IsQ0FBdEIsQ0FIakI7QUFJQSxXQUFLQyxTQUFMLEdBQWlCQyxLQUFqQixDQUF1QixRQUF2QixFQUFpQztBQUFFVixRQUFBQSxFQUFFLEVBQUVBLEVBQU47QUFBVVcsUUFBQUEsTUFBTSxFQUFFSixZQUFZLENBQUNJO0FBQS9CLE9BQWpDLEVBQXlFLEVBQXpFLEVBQTRFYixRQUE1RTtBQUNBLEs7QUFDT2MsSUFBQUEsUSxxQkFBU2YsSyxFQUFnQjtBQUNoQyxVQUFJZ0IsZ0JBQThCLEdBQUcsRUFBckM7QUFBQSxVQUNDQyxLQUFLLEdBQUdqQixLQUFLLENBQUNrQixZQUFOLENBQW1CLE9BQW5CLENBRFQ7O0FBR0EsVUFBSUQsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE1BQU4sR0FBZSxDQUE1QixFQUErQjtBQUM5QkgsUUFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJSSxNQUFKLENBQVcsTUFBWCxFQUFtQkMsY0FBYyxDQUFDQyxRQUFsQyxFQUE0Q0wsS0FBNUMsQ0FBRCxDQUFuQjtBQUNBOztBQUVDLFdBQUtNLE9BQUwsR0FBZUMsSUFBZixDQUFvQixlQUFwQixDQUFELENBQStDQyxVQUEvQyxDQUEwRCxPQUExRCxDQUFELENBQXlGQyxNQUF6RixDQUFnR1YsZ0JBQWhHLEVBQWtILGFBQWxIO0FBQ0EsSztBQUNPVyxJQUFBQSxNLG1CQUFPM0IsSyxFQUFnQjtBQUM5QixXQUFLTixjQUFMLEdBQXNCLENBQUMsS0FBS0EsY0FBNUI7QUFDQSxZQUFNa0MsSUFBSSxHQUFHLEtBQUtMLE9BQUwsRUFBYjtBQUFBLFlBQ0NNLEtBQUssR0FBSUQsSUFBSSxDQUFDSixJQUFMLENBQVUsZUFBVixDQURWO0FBQUEsWUFFQ00sT0FBTyxHQUFJRCxLQUFLLENBQUNKLFVBQU4sQ0FBaUIsT0FBakIsQ0FGWjtBQUFBLFlBR0NNLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVcsTUFBWCxFQUFtQixLQUFLdEMsY0FBeEIsQ0FIVjtBQUtBb0MsTUFBQUEsT0FBTyxDQUFDRyxJQUFSLENBQWFGLE1BQWI7QUFDQTs7U0FqQ21CdEMsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzeXN0ZW0gfSBmcm9tIFwic2FwL3VpL0RldmljZVwiO1xyXG5pbXBvcnQgVUk1RXZlbnQgZnJvbSBcInNhcC91aS9iYXNlL0V2ZW50XCI7XHJcbmltcG9ydCBDb21wb25lbnQsIHsgVUlTdGF0ZSB9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcInNhcC9tL0xpc3RcIjtcclxuaW1wb3J0IEpTT05Nb2RlbCBmcm9tIFwic2FwL3VpL21vZGVsL2pzb24vSlNPTk1vZGVsXCI7XHJcbmltcG9ydCBPRGF0YUxpc3RCaW5kaW5nIGZyb20gXCJzYXAvdWkvbW9kZWwvb2RhdGEvdjIvT0RhdGFMaXN0QmluZGluZ1wiO1xyXG5pbXBvcnQgQ3VzdG9tTGlzdEl0ZW0gZnJvbSBcInNhcC9tL0N1c3RvbUxpc3RJdGVtXCI7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSBcInNhcC91aS9tb2RlbC9GaWx0ZXJcIjtcclxuaW1wb3J0IEZpbHRlck9wZXJhdG9yIGZyb20gXCJzYXAvdWkvbW9kZWwvRmlsdGVyT3BlcmF0b3JcIjtcclxuaW1wb3J0IFNvcnRlciBmcm9tIFwic2FwL3VpL21vZGVsL1NvcnRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lc3BhY2UgY29tLnRlbXBsYXRlLmNvbnRyb2xsZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc3RlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcclxuXHRwcml2YXRlIGRlc2NlbmRpbmdTb3J0ID0gZmFsc2U7XHJcblx0cHVibGljIG9uSW5pdCgpOiB2b2lkIHtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25NYXN0ZXJNYXRjaGVkKCkge1xyXG5cdFx0KHRoaXMuZ2V0TW9kZWwoXCJhcHBWaWV3XCIpIGFzIEpTT05Nb2RlbCkuc2V0UHJvcGVydHkoXCIvbGF5b3V0XCIsIFwiT25lQ29sdW1uXCIpO1xyXG5cdH1cclxuXHRwcml2YXRlIGFzeW5jIG9uTGlzdEl0ZW1QcmVzcyhldmVudDogVUk1RXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGNvbnN0IGJSZXBsYWNlID0gIXN5c3RlbS5waG9uZSxcclxuXHRcdFx0aWQgPSAoKGV2ZW50LmdldFNvdXJjZSgpIGFzIEN1c3RvbUxpc3RJdGVtKS5nZXRCaW5kaW5nQ29udGV4dCgpLmdldFByb3BlcnR5KFwiSURcIikgYXMgbnVtYmVyKSxcclxuXHRcdFx0aGVscGVyID0gYXdhaXQgKHRoaXMuZ2V0T3duZXJDb21wb25lbnQoKSBhcyBDb21wb25lbnQpLmdldEhlbHBlcigpLFxyXG5cdFx0XHRvTmV4dFVJU3RhdGUgPSAoaGVscGVyLmdldE5leHRVSVN0YXRlKDEpIGFzIFVJU3RhdGUpO1xyXG5cdFx0dGhpcy5nZXRSb3V0ZXIoKS5uYXZUbyhcImRldGFpbFwiLCB7IGlkOiBpZCwgbGF5b3V0OiBvTmV4dFVJU3RhdGUubGF5b3V0IH0se30sYlJlcGxhY2UpO1xyXG5cdH1cclxuXHRwcml2YXRlIG9uU2VhcmNoKGV2ZW50OlVJNUV2ZW50KSB7XHJcblx0XHRsZXQgdGFibGVTZWFyY2hTdGF0ZTpBcnJheTxGaWx0ZXI+ID0gW10sXHJcblx0XHRcdHF1ZXJ5ID0gZXZlbnQuZ2V0UGFyYW1ldGVyKFwicXVlcnlcIik7XHJcblxyXG5cdFx0aWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGFibGVTZWFyY2hTdGF0ZSA9IFtuZXcgRmlsdGVyKFwiTmFtZVwiLCBGaWx0ZXJPcGVyYXRvci5Db250YWlucywgcXVlcnkpXTtcclxuXHRcdH1cclxuXHJcblx0XHQoKHRoaXMuZ2V0VmlldygpLmJ5SWQoXCJwcm9kdWN0c1RhYmxlXCIpIGFzIExpc3QpLmdldEJpbmRpbmcoXCJpdGVtc1wiKSBhcyBPRGF0YUxpc3RCaW5kaW5nKS5maWx0ZXIodGFibGVTZWFyY2hTdGF0ZSwgXCJBcHBsaWNhdGlvblwiKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBvblNvcnQoZXZlbnQ6VUk1RXZlbnQpIHtcclxuXHRcdHRoaXMuZGVzY2VuZGluZ1NvcnQgPSAhdGhpcy5kZXNjZW5kaW5nU29ydDtcclxuXHRcdGNvbnN0IHZpZXcgPSB0aGlzLmdldFZpZXcoKSxcclxuXHRcdFx0dGFibGUgPSAodmlldy5ieUlkKFwicHJvZHVjdHNUYWJsZVwiKSBhcyBMaXN0KSxcclxuXHRcdFx0YmluZGluZyA9ICh0YWJsZS5nZXRCaW5kaW5nKFwiaXRlbXNcIikgYXMgT0RhdGFMaXN0QmluZGluZyksXHJcblx0XHRcdHNvcnRlciA9IG5ldyBTb3J0ZXIoXCJOYW1lXCIsIHRoaXMuZGVzY2VuZGluZ1NvcnQpO1xyXG5cclxuXHRcdGJpbmRpbmcuc29ydChzb3J0ZXIpO1xyXG5cdH1cclxufSJdfQ==