sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel", "../model/formatter"], function (__BaseController, JSONModel, __formatter) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const BaseController = _interopRequireDefault(__BaseController);

  const formatter = _interopRequireDefault(__formatter);

  /**
   * @namespace com.template.controller
   */
  const Detail = BaseController.extend("com.template.controller.Detail", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.formatter = formatter;
    },
    onInit: function _onInit() {
      const viewModel = new JSONModel({
        busy: false,
        delay: 0
      });
      this.setModel(viewModel, "detailView");
      this.getRouter().getRoute("detail").attachPatternMatched(event => this.onObjectMatched(event), this);
    },
    onObjectMatched: function _onObjectMatched(oEvent) {
      const viewModel = this.getModel("detailView");
      this.id = oEvent.getParameter("arguments").id || this.id || "0";
      this.getModel().metadataLoaded().then(() => {
        const path = this.getModel().createKey("/Products", {
          ID: this.id
        });
        this.getView().bindElement({
          path: path,
          parameters: {
            expand: "Supplier,Category"
          },
          events: {
            change: () => this.onBindingChange(),
            dataRequested: () => {
              viewModel.setProperty("/busy", true);
            },
            dataReceived: function () {
              viewModel.setProperty("/busy", false);
            }
          }
        });
      });
    },
    onBindingChange: function _onBindingChange() {
      const elementBinding = this.getView().getElementBinding(); // No data for the binding

      if (!elementBinding.getBoundContext()) {
        this.getRouter().getTargets().display("detailObjectNotFound");
      }
    },
    onCloseDetailPress: function _onCloseDetailPress() {
      this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreen", false);
      this.getRouter().navTo("master");
    },
    handleFullScreen: function _handleFullScreen() {
      const sNextLayout = this.getModel("appView").getProperty("/actionButtonsInfo/midColumn/fullScreen");
      this.getRouter().navTo("detail", {
        layout: sNextLayout,
        id: this.id
      });
    },
    handleExitFullScreen: function _handleExitFullScreen() {
      const sNextLayout = this.getModel("appView").getProperty("/actionButtonsInfo/midColumn/exitFullScreen");
      this.getRouter().navTo("detail", {
        layout: sNextLayout,
        id: this.id
      });
    },
    handleClose: function _handleClose() {
      const sNextLayout = this.getModel("appView").getProperty("/actionButtonsInfo/midColumn/closeColumn");
      this.getRouter().navTo("master", {
        layout: sNextLayout
      });
    }
  });
  return Detail;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL0RldGFpbC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIkJhc2VDb250cm9sbGVyIiwiZm9ybWF0dGVyIiwiRGV0YWlsIiwib25Jbml0Iiwidmlld01vZGVsIiwiSlNPTk1vZGVsIiwiYnVzeSIsImRlbGF5Iiwic2V0TW9kZWwiLCJnZXRSb3V0ZXIiLCJnZXRSb3V0ZSIsImF0dGFjaFBhdHRlcm5NYXRjaGVkIiwiZXZlbnQiLCJvbk9iamVjdE1hdGNoZWQiLCJvRXZlbnQiLCJnZXRNb2RlbCIsImlkIiwiZ2V0UGFyYW1ldGVyIiwibWV0YWRhdGFMb2FkZWQiLCJ0aGVuIiwicGF0aCIsImNyZWF0ZUtleSIsIklEIiwiZ2V0VmlldyIsImJpbmRFbGVtZW50IiwicGFyYW1ldGVycyIsImV4cGFuZCIsImV2ZW50cyIsImNoYW5nZSIsIm9uQmluZGluZ0NoYW5nZSIsImRhdGFSZXF1ZXN0ZWQiLCJzZXRQcm9wZXJ0eSIsImRhdGFSZWNlaXZlZCIsImVsZW1lbnRCaW5kaW5nIiwiZ2V0RWxlbWVudEJpbmRpbmciLCJnZXRCb3VuZENvbnRleHQiLCJnZXRUYXJnZXRzIiwiZGlzcGxheSIsIm9uQ2xvc2VEZXRhaWxQcmVzcyIsIm5hdlRvIiwiaGFuZGxlRnVsbFNjcmVlbiIsInNOZXh0TGF5b3V0IiwiZ2V0UHJvcGVydHkiLCJsYXlvdXQiLCJoYW5kbGVFeGl0RnVsbFNjcmVlbiIsImhhbmRsZUNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFPQSxjOztRQUVBQyxTOztBQUtQO0FBQ0E7QUFDQTtRQUNxQkMsTSxHQUFlRixjOzs7V0FFM0JDLFMsR0FBWUEsUzs7QUFDYkUsSUFBQUEsTSxxQkFBZTtBQUNyQixZQUFNQyxTQUFTLEdBQUcsSUFBSUMsU0FBSixDQUFjO0FBQy9CQyxRQUFBQSxJQUFJLEVBQUcsS0FEd0I7QUFFL0JDLFFBQUFBLEtBQUssRUFBQztBQUZ5QixPQUFkLENBQWxCO0FBSUEsV0FBS0MsUUFBTCxDQUFjSixT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V0FBS2pDLFNBQUwsR0FBaUI4QixLQUFqQixDQUF1QixRQUF2QixFQUFpQztBQUFFSSxRQUFBQSxNQUFNLEVBQUVGO0FBQVYsT0FBakM7QUFDQTs7U0EzRG1CdkMsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgSlNPTk1vZGVsIGZyb20gXCJzYXAvdWkvbW9kZWwvanNvbi9KU09OTW9kZWxcIjtcclxuaW1wb3J0IGZvcm1hdHRlciBmcm9tIFwiLi4vbW9kZWwvZm9ybWF0dGVyXCI7XHJcbmltcG9ydCBVSTVFdmVudCBmcm9tIFwic2FwL3VpL2Jhc2UvRXZlbnRcIjtcclxuaW1wb3J0IE9EYXRhTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9vZGF0YS92Mi9PRGF0YU1vZGVsXCI7XHJcbmltcG9ydCB7aW5wdXRQYXJhbWV0ZXJzfSBmcm9tIFwiLi9BcHAuY29udHJvbGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lc3BhY2UgY29tLnRlbXBsYXRlLmNvbnRyb2xsZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbCBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcclxuXHRwcml2YXRlIGlkOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XHJcblx0cHVibGljIG9uSW5pdCgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IG5ldyBKU09OTW9kZWwoe1xyXG5cdFx0XHRidXN5IDogZmFsc2UsXHJcblx0XHRcdGRlbGF5OjBcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zZXRNb2RlbCh2aWV3TW9kZWwsIFwiZGV0YWlsVmlld1wiKTtcclxuXHJcblx0XHR0aGlzLmdldFJvdXRlcigpLmdldFJvdXRlKFwiZGV0YWlsXCIpLmF0dGFjaFBhdHRlcm5NYXRjaGVkKChldmVudDpVSTVFdmVudCk9PnRoaXMub25PYmplY3RNYXRjaGVkKGV2ZW50KSwgdGhpcyk7XHJcblx0fVxyXG5cdHByaXZhdGUgb25PYmplY3RNYXRjaGVkKG9FdmVudDogVUk1RXZlbnQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9ICh0aGlzLmdldE1vZGVsKFwiZGV0YWlsVmlld1wiKSBhcyBKU09OTW9kZWwpO1xyXG5cdFx0dGhpcy5pZCA9IChvRXZlbnQuZ2V0UGFyYW1ldGVyKFwiYXJndW1lbnRzXCIpIGFzIGlucHV0UGFyYW1ldGVycykuaWQgfHwgdGhpcy5pZCB8fCBcIjBcIjtcclxuXHRcdCh0aGlzLmdldE1vZGVsKCkgYXMgT0RhdGFNb2RlbCkubWV0YWRhdGFMb2FkZWQoKS50aGVuKCAoKT0+IHtcclxuXHRcdFx0Y29uc3QgcGF0aCA9ICh0aGlzLmdldE1vZGVsKCkgYXMgT0RhdGFNb2RlbCkuY3JlYXRlS2V5KFwiL1Byb2R1Y3RzXCIse1xyXG5cdFx0XHRcdElEOnRoaXMuaWRcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZ2V0VmlldygpLmJpbmRFbGVtZW50KHtcclxuXHRcdFx0XHRwYXRoOiBwYXRoLFxyXG5cdFx0XHRcdHBhcmFtZXRlcnM6e2V4cGFuZDpcIlN1cHBsaWVyLENhdGVnb3J5XCJ9LFxyXG5cdFx0XHRcdGV2ZW50czp7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogKCk9PnRoaXMub25CaW5kaW5nQ2hhbmdlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVJlcXVlc3RlZCA6ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zZXRQcm9wZXJ0eShcIi9idXN5XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVJlY2VpdmVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zZXRQcm9wZXJ0eShcIi9idXN5XCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRwcml2YXRlIG9uQmluZGluZ0NoYW5nZSgpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnRCaW5kaW5nID0gdGhpcy5nZXRWaWV3KCkuZ2V0RWxlbWVudEJpbmRpbmcoKTtcclxuXHRcdC8vIE5vIGRhdGEgZm9yIHRoZSBiaW5kaW5nXHJcblx0XHRpZiAoIWVsZW1lbnRCaW5kaW5nLmdldEJvdW5kQ29udGV4dCgpKSB7XHJcblx0XHRcdHRoaXMuZ2V0Um91dGVyKCkuZ2V0VGFyZ2V0cygpLmRpc3BsYXkoXCJkZXRhaWxPYmplY3ROb3RGb3VuZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIG9uQ2xvc2VEZXRhaWxQcmVzcygpOiB2b2lkIHtcclxuXHRcdCh0aGlzLmdldE1vZGVsKFwiYXBwVmlld1wiKSBhcyBKU09OTW9kZWwpLnNldFByb3BlcnR5KFwiL2FjdGlvbkJ1dHRvbnNJbmZvL21pZENvbHVtbi9mdWxsU2NyZWVuXCIsIGZhbHNlKTtcclxuXHRcdHRoaXMuZ2V0Um91dGVyKCkubmF2VG8oXCJtYXN0ZXJcIik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGFuZGxlRnVsbFNjcmVlbigpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHNOZXh0TGF5b3V0ID0gKCh0aGlzLmdldE1vZGVsKFwiYXBwVmlld1wiKSBhcyBKU09OTW9kZWwpLmdldFByb3BlcnR5KFwiL2FjdGlvbkJ1dHRvbnNJbmZvL21pZENvbHVtbi9mdWxsU2NyZWVuXCIpIGFzIHN0cmluZyk7XHJcblx0XHR0aGlzLmdldFJvdXRlcigpLm5hdlRvKFwiZGV0YWlsXCIsIHsgbGF5b3V0OiBzTmV4dExheW91dCwgaWQ6IHRoaXMuaWQgfSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGFuZGxlRXhpdEZ1bGxTY3JlZW4oKTogdm9pZCB7XHJcblx0XHRjb25zdCBzTmV4dExheW91dCA9ICgodGhpcy5nZXRNb2RlbChcImFwcFZpZXdcIikgYXMgSlNPTk1vZGVsKS5nZXRQcm9wZXJ0eShcIi9hY3Rpb25CdXR0b25zSW5mby9taWRDb2x1bW4vZXhpdEZ1bGxTY3JlZW5cIikgYXMgc3RyaW5nKTtcclxuXHRcdHRoaXMuZ2V0Um91dGVyKCkubmF2VG8oXCJkZXRhaWxcIiwgeyBsYXlvdXQ6IHNOZXh0TGF5b3V0LCBpZDogdGhpcy5pZCB9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoYW5kbGVDbG9zZSgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHNOZXh0TGF5b3V0ID0gKCh0aGlzLmdldE1vZGVsKFwiYXBwVmlld1wiKSBhcyBKU09OTW9kZWwpLmdldFByb3BlcnR5KFwiL2FjdGlvbkJ1dHRvbnNJbmZvL21pZENvbHVtbi9jbG9zZUNvbHVtblwiKSBhcyBzdHJpbmcpO1xyXG5cdFx0dGhpcy5nZXRSb3V0ZXIoKS5uYXZUbyhcIm1hc3RlclwiLCB7IGxheW91dDogc05leHRMYXlvdXQgfSk7XHJcblx0fVxyXG5cclxufSJdfQ==