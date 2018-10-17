import { configureTests, ConfigureFn } from './../test-config.helper';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  const routerSpy = { navigate: jest.fn() };
  let component: AppComponent;
  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Router,
          useValue: routerSpy
        }
      ]
    }).compileComponents();
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'covjest'`, () => {
    expect(component.title).toEqual('covjest');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to covjest!');
  });

  it('should navigate to crisis', () => {
    component.crisisClick();
    expect(routerSpy.navigate.mock.calls.length).toBe(1);
  });

});
