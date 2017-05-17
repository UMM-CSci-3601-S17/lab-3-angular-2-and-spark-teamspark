/**
 * Created by holma198 on 2/14/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FilterBy }      from './app/users/filter.pipe';

@NgModule({
    imports:        [CommonModule],
    declarations:   [ FilterBy ],
    exports:        [ FilterBy ],
})
export class PipeModule {}