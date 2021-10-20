import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {PreviewDialogService} from '@taiga-ui/addon-preview';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-preview-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPreviewExample1 {
    index = 0;

    @ViewChild('preview')
    readonly preview?: TemplateRef<{}>;

    @ViewChild('contentSample')
    readonly contentSample?: TemplateRef<{}>;

    constructor(
        @Inject(PreviewDialogService)
        private readonly previewService: PreviewDialogService,
    ) {}

    get title(): string {
        return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';
    }

    get previewContent(): PolymorpheusContent {
        return this.index === 0 && this.contentSample
            ? this.contentSample
            : 'http://marsibarsi.me/images/1x1small.jpg';
    }

    show() {
        this.previewService.open(this.preview || ('' as any)).subscribe({
            complete: () => console.log('complete'),
        });
    }

    download() {
        console.log('Downloading...');
    }

    delete() {
        console.log('Deleting...');
    }
}
