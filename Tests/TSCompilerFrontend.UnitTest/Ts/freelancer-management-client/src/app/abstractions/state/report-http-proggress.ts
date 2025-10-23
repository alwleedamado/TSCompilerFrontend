import { MonoTypeOperatorFunction, Observable } from "rxjs";
import { RequestState } from "utils/models/RequestState";
export function reportRequestState<T, R>(report: (r: RequestState) => void): MonoTypeOperatorFunction<T> {
    return (source: Observable<T>) => new Observable(subscriber => {
        report(RequestState.request);

        const subscription = source?.subscribe({
            next: (res: T) => {
                report(RequestState.success);
                subscriber.next(res)
            },
            error: (error: any) => {
                report(RequestState.fail);
                subscriber.error(error)
            },
            complete: () => {
                report(RequestState.idle);
                subscriber.complete()
            }
        })
        return () => {
            if(!subscription.closed) {
                
                subscription.unsubscribe()
            }

        }
    })
}