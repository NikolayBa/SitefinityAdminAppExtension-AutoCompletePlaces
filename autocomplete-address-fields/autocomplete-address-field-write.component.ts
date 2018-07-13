import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit} from "@angular/core";
import { FieldBase } from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

import { MapsAPILoader } from '@agm/core';
// import { google } from "@agm/core/services/google-maps-types";
import {} from '@types/googlemaps';


// import { ReactiveFormsModule } from "@angular/forms";

/**
 * The component used to display the field in write mode.
 * One can use inline temlpate & styles OR templateUrl & styleUrls, like here OR mixture of that. See -readonly.component.ts version for the read mode type.
 */


@Component({
    templateUrl: "./autocomplete-address-field-write.component.html",
    styleUrls: [ "./autocomplete-address-field-write.component.css" ]
})
export class CustomAddressAutocompleteFieldInputWriteComponent extends FieldBase implements OnInit, AfterViewInit { 
    options: string[] = ['Value1', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;
    value;

    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private elementRef: ElementRef){
        super();
    }
    ngOnInit(){}

    ngAfterViewInit(){

        debugger
        var that = this;
        this.mapsAPILoader.load().then(
            () => {
                let autocmplete = new google.maps.places.Autocomplete(this.elementRef.nativeElement.children[0], {types:["address"]});
                
                
                autocmplete.addListener("place_changed", ()  => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocmplete.getPlace();
                        that.value = place.formatted_address;

                        if(place.geometry === undefined || place.geometry == null){
                            return;
                        }


                    });
                });
            }
        )
    }
}
