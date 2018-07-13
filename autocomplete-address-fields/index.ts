import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatAutocompleteModule, MatInputModule } from "@angular/material"

import { HttpClientModule } from '@angular/common/http';

import { CustomAddressAutocompleteFieldInputReadonlyComponent } from "./autocomplete-address-field-readonly.component";
import { CustomAddressAutocompleteFieldInputWriteComponent } from "./autocomplete-address-field-write.component";
import { CUSTOM_FIELDS_PROVIDER } from "./autocomplete-address-fields-provider";

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import {MapsAPILoader} from '@agm/core';

// require("../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css");
require("../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css")
/**
 * The custom fields module.
 */
@NgModule({
    declarations: [
        CustomAddressAutocompleteFieldInputReadonlyComponent,
        CustomAddressAutocompleteFieldInputWriteComponent
    ],
    entryComponents: [
        // The components need to be registered here as they are instantiated dynamically.
        CustomAddressAutocompleteFieldInputReadonlyComponent,
        CustomAddressAutocompleteFieldInputWriteComponent
    ],
    providers: [
        CUSTOM_FIELDS_PROVIDER,
        GoogleMapsAPIWrapper
    ],
    imports: [FormsModule, MatAutocompleteModule, MatInputModule, CommonModule, HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB2PoAESXVcxhY4CIBXt-Arm2xYmjvDatk',
            libraries : ["places"]
          })
        ]
})
export class CustomAddressAutocompleteFieldsModule { }
