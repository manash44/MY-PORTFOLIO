import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditor } from './admin-editor';

describe('AdminEditor', () => {
  let component: AdminEditor;
  let fixture: ComponentFixture<AdminEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
