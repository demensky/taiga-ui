import {
    ComponentRef,
    Directive,
    EmbeddedViewRef,
    inject,
    Injectable,
    INJECTOR,
    Provider,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {TuiNoHostException} from '@taiga-ui/cdk/exceptions';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

/**
 * Abstract class for host element for dynamically created portals.
 */
@Directive()
export abstract class TuiPortalsComponent {
    @ViewChild('viewContainer', {read: ViewContainerRef})
    private readonly vcr!: ViewContainerRef;

    private readonly injector = inject(INJECTOR);

    protected readonly nothing = inject(TuiPortalService).attach(this);

    addComponentChild<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        const injector = component.createInjector(this.injector);
        const ref = this.vcr.createComponent(component.component, {injector});

        ref.changeDetectorRef.detectChanges();

        return ref;
    }

    addTemplateChild<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.vcr.createEmbeddedView(templateRef, context);
    }
}

/**
 * Abstract service for displaying portals
 */
@Injectable()
export abstract class TuiPortalService {
    protected host?: TuiPortalsComponent;

    protected get safeHost(): TuiPortalsComponent {
        if (!this.host) {
            throw new TuiNoHostException();
        }

        return this.host;
    }

    attach(host: TuiPortalsComponent): void {
        this.host = host;
    }

    add<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        return this.safeHost.addComponentChild(component);
    }

    remove<C>({hostView}: ComponentRef<C>): void {
        if (!hostView.destroyed) {
            hostView.destroy();
        }
    }

    addTemplate<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.safeHost.addTemplateChild(templateRef, context);
    }

    removeTemplate<C>(viewRef: EmbeddedViewRef<C>): void {
        if (!viewRef.destroyed) {
            viewRef.destroy();
        }
    }
}

export function tuiAsPortal(useExisting: typeof TuiPortalService): Provider {
    return {
        provide: TuiPortalService,
        useExisting,
    };
}
