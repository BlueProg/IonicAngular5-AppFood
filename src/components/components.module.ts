import { NgModule } from '@angular/core';
import { ButtonOrderComponent } from './button-order/button-order';
import { TotalOrderComponent } from './total-order/total-order';
@NgModule({
	declarations: [
    ButtonOrderComponent,
    TotalOrderComponent],
	imports: [],
	exports: [
    ButtonOrderComponent,
    TotalOrderComponent]
})
export class ComponentsModule {}
