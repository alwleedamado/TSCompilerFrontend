import { Inject, Injectable } from "@angular/core";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { AbstractQuery } from "app/abstractions/state/store-query";
import { AbstractStore } from "app/abstractions/state/store-state";
import { PageState, PageFilterState, getDefaultFilterState } from "core/models";
import produce from "immer";
import { Observable, Subject, of } from "rxjs";
import { TabkeView } from "./base-lsit.interface";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { ComponentType } from "@angular/cdk/portal";

@Injectable()
export abstract class AbstractList<T> implements TabkeView {

	onDestroy$: Subject<void> = new Subject();
	loading$: Observable<boolean>
	abstract title: string;
	currentPageFilterState: PageFilterState;
	 entities$: Observable<T[]> = of([]);
	
	constructor(
		protected layoutUtilsService: LayoutUtilsService,
		protected store: AbstractStore<T>,
		protected storeQuery: AbstractQuery<T>,
		protected storeService: AbstractStateService<T>,
		private formComponent: ComponentType<any>
	) { 
	}

	ngOnInit() {
		this.storeQuery.pageFilterState.subscribe(q => this.currentPageFilterState = q);
		this.storeService.fetchEntitiesAsync(this.currentPageFilterState);
		this.entities$ = this.storeQuery.entities$;

	}

	ngOnDestroy() {
		this.onDestroy$.next();
		this.onDestroy$.complete();
	}

	pagenatorChange(page: PageState) {
		this.currentPageFilterState = produce(this.currentPageFilterState, query => {
			query.pageSize = page.pageSize;
			query.pageNumber = page.pageNumber;
		});
		this.loadList();
	};

	afterEntityInitialized() {

	}

	loadList(event?: any) {
		let query:PageFilterState = { ...this.currentPageFilterState }
		query.sortField = event.sortField;
		query.sortDirection = event.sortDirection == 1 ? 'asc' : 'desc';
		this.storeService.fetchEntitiesAsync(query)
	}

	addEntity() {
		this.layoutUtilsService.open(this.formComponent)
	}

	editEntity(id: string | number) {
		this.layoutUtilsService.open(this.formComponent, { data: { id } })
	}

	deleteEntity(id: string | number) {
		this.layoutUtilsService.prompt({
			title: 'Are you sure to delete this entity?',

		}).subscribe(res => {
			if (res) this.storeService.deleteEntity(id)
		})
	}
	
	viewEntity(id: string | number) {}
}
