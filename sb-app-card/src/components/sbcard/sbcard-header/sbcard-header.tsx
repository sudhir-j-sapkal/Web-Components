import { Component } from '@stencil/core'

@Component({
    tag: 'sb-card-header',
    styleUrl: 'sbcard-header.css'
})
export class SbCardHeader {

    render() {
        return (
            <div class="sb-card-header">
                <slot />
            </div>
        );
    }

}