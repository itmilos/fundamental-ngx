import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckboxModule } from '@fundamental-ngx/core/checkbox';
import { TableCellDirective, TableModule } from '@fundamental-ngx/core/table';

@Component({
    template: `
        <td
            fd-table-cell
            [activable]="activable"
            [hoverable]="hoverable"
            [fitContent]="fitContent"
            [noPadding]="noPadding"
            [noBorderX]="noBorderX"
            [noBorderY]="noBorderY"
        >
            <fd-checkbox></fd-checkbox>
        </td>
    `
})
class TestComponent {
    @ViewChild(TableCellDirective)
    cell: TableCellDirective;

    activable = false;
    hoverable = false;
    fitContent = false;
    noPadding = false;
    noBorderX = false;
    noBorderY = false;
}

describe('TableCellComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [TableModule, CheckboxModule]
        }).compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should assign classes', async () => {
        expect(component.cell.elementRef.nativeElement.classList.length).toBe(2);

        component.activable = true;
        component.hoverable = true;
        component.fitContent = true;
        component.noPadding = true;
        component.noBorderX = true;
        component.noBorderY = true;

        fixture.detectChanges();

        expect(component.cell.elementRef.nativeElement.classList.length).toBe(8);
    });
});
