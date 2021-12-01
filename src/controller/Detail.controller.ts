import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "../model/formatter";
import UI5Event from "sap/ui/base/Event";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import {inputParameters} from "./App.controller";

/**
 * @namespace com.template.controller
 */
export default class Detail extends BaseController {
	private id: string;
	// // shortcut for sap.m.URLHelper
	// var URLHelper = mobileLibrary.URLHelper;
	// formatter: formatter,
	private formatter = formatter;
	
	public onInit(): void {
		this.getRouter().getRoute("master").attachPatternMatched((event:UI5Event)=>this.onObjectMatched(event), this);
	}
	/* =========================================================== */
	/* begin: internal methods                                     */
	/* =========================================================== */

	/**
	 * Binds the view to the object path and expands the aggregated line items.
	 * @function
	 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
	 * @private
	 */
	private onObjectMatched(oEvent: UI5Event): void {
		const sObjectId = (oEvent.getParameter("arguments") as inputParameters).id;
		this.id = sObjectId || "";
		(this.getModel("appView") as JSONModel).setProperty("/layout", "TwoColumnsMidExpanded");
		(this.getModel() as ODataModel).metadataLoaded().then( ()=> {
			//binding
		});
	}
	/**
	 * Set the full screen mode to false and navigate to master page
	 */
	public onCloseDetailPress(): void {
		(this.getModel("appView") as JSONModel).setProperty("/actionButtonsInfo/midColumn/fullScreen", false);
		// No item should be selected on master after detail page is closed
		this.getRouter().navTo("master");
	}

	public handleFullScreen(): void {
		const sNextLayout = ((this.getModel("appView") as JSONModel).getProperty("/actionButtonsInfo/midColumn/fullScreen") as string);
		this.getRouter().navTo("detail", { layout: sNextLayout, id: this.id });
	}

	public handleExitFullScreen(): void {
		const sNextLayout = ((this.getModel("appView") as JSONModel).getProperty("/actionButtonsInfo/midColumn/exitFullScreen") as string);
		this.getRouter().navTo("detail", { layout: sNextLayout, id: this.id });
	}

	public handleClose(): void {
		const sNextLayout = ((this.getModel("appView") as JSONModel).getProperty("/actionButtonsInfo/midColumn/closeColumn") as string);
		this.getRouter().navTo("mss", { layout: sNextLayout });
	}

}