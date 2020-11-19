import { Directive, Input, TemplateRef, ViewContainerRef , NgModule} from '@angular/core';

@Directive({
  selector: '[appcustomif]',
})
export class appcustomifdirective {
  constructor(
    private templateref: TemplateRef<any>,
    private viewcontainer: ViewContainerRef
  ) {console.log('appcustomif directive Loaded');}

  @Input() set appcustomif(condition: boolean) {
    console.log('condition '+condition);
    if (condition) {
      this.viewcontainer.createEmbeddedView(this.templateref);
    } else {
      this.viewcontainer.clear();
    }
  }
}
// @NgModule({
//   declarations: [ appcustomifdirective ],
//   exports: [ appcustomifdirective ]
// })
// export class appcustomifdirectiveModule {}
