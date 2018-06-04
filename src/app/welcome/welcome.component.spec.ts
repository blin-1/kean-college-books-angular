import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as title1 'Welcome to Kean University'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title1).toEqual('Welcome to Kean University');
  }));
  
  it(`should have as title2 'Textbook Auction'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title2).toEqual('Textbook Auction');
  }));
  
  it('should render whole title in a <p> tag', async(() => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('p').textContent).toContain('Welcome to Kean University');
	expect(el.querySelector('p').textContent).toContain('Textbook Auction');	
  }));
  
/*   it('should render whole title in a blue color', async(() => {
	const el = fixture.debugElement.nativeElement.querySelector('p');
	//console.log(el.style);
	expect(el.style.color).toEqual('blue');
	//expect (el.toHaveCss({display: "none", margin: "10px"}));
  })); */
  
});


