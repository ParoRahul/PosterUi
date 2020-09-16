import { Injectable } from '@angular/core';
import { IFeaturesModel, featuresList } from '../model/home.page.model';

@Injectable({
  providedIn: 'root'
})
export class HompageDataService {

  constructor() { }

  get featuresObjects(): IFeaturesModel[] {
    return featuresList;
  }
}
