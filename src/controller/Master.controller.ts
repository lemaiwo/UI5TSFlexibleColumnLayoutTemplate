import BaseController from "./BaseController";
import { system } from "sap/ui/Device";
import UI5Event from "sap/ui/base/Event";
import Component, { UIState } from "../Component";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import BusyIndicator from "sap/ui/core/BusyIndicator";

/**
 * @namespace com.template.controller
 */
export default class Master extends BaseController {
	/**
	 * Called when the master list controller is instantiated. It sets up the event handling for the master/detail communication and other lifecycle tasks.
	 * @public
	 */
	public onInit(): void {
		this.getRouter().getRoute("detail").attachPatternMatched(() => this.onMasterMatched(), this);
	}

	private onMasterMatched() {
		void (this.getModel() as ODataModel).metadataLoaded().then(() => {
		});
	}
	private async showDetail(event: UI5Event, pernr: string): Promise<void> {
		const bReplace = !system.phone;
		// set the layout property of FCL control to show two columns
		// (this.getModel("appView") as JSONModel).setProperty("/layout", "TwoColumnsMidExpanded");

		const helper = await (this.getOwnerComponent() as Component).getHelper(),
			oNextUIState = (helper.getNextUIState(1) as UIState);
		this.getRouter().navTo("detail", { id: pernr, layout: oNextUIState.layout },{},bReplace);
	}
}