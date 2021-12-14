import BaseController from "./BaseController";
import { system } from "sap/ui/Device";
import UI5Event from "sap/ui/base/Event";
import Component, { UIState } from "../Component";
import List from "sap/m/List";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import CustomListItem from "sap/m/CustomListItem";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import Sorter from "sap/ui/model/Sorter";

/**
 * @namespace com.template.controller
 */
export default class Master extends BaseController {
	private descendingSort = false;
	public onInit(): void {
	}

	private onMasterMatched() {
		(this.getModel("appView") as JSONModel).setProperty("/layout", "OneColumn");
	}
	private async onListItemPress(event: UI5Event): Promise<void> {
		const bReplace = !system.phone,
			id = ((event.getSource() as CustomListItem).getBindingContext().getProperty("ID") as number),
			helper = await (this.getOwnerComponent() as Component).getHelper(),
			oNextUIState = (helper.getNextUIState(1) as UIState);
		this.getRouter().navTo("detail", { id: id, layout: oNextUIState.layout },{},bReplace);
	}
	private onSearch(event:UI5Event) {
		let tableSearchState:Array<Filter> = [],
			query = event.getParameter("query");

		if (query && query.length > 0) {
			tableSearchState = [new Filter("Name", FilterOperator.Contains, query)];
		}

		((this.getView().byId("productsTable") as List).getBinding("items") as ODataListBinding).filter(tableSearchState, "Application");
	}
	private onSort(event:UI5Event) {
		this.descendingSort = !this.descendingSort;
		const view = this.getView(),
			table = (view.byId("productsTable") as List),
			binding = (table.getBinding("items") as ODataListBinding),
			sorter = new Sorter("Name", this.descendingSort);

		binding.sort(sorter);
	}
}