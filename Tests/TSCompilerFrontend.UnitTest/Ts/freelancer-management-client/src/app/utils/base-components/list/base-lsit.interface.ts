import { OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

export interface TabkeView extends OnInit, OnDestroy {
    title: string;
    onDestroy$: Subject<void>;
    loading$: Observable<boolean>;
    loadList(lazyTableEvent: any): void;
}