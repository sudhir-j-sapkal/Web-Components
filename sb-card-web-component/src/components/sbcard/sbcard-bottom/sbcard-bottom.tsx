import { Component } from '@stencil/core'

@Component({
    tag: 'sb-card-bottom',
    styleUrl: 'sbcard-bottom.css'
})
export class SbCardBottom {

    render() {
        return (
            <div class="sb-card-bottom">
                <slot />
            </div>
        );
    }

}