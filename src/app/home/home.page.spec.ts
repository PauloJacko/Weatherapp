import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page'; 
import { WeatherService } from '../weatherapp.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { IonicModule } from '@ionic/angular'; 

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage, IonicModule.forRoot(), HttpClientTestingModule], 
      providers: [WeatherService] 
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});