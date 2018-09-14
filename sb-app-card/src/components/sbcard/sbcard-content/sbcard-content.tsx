import { Component } from '@stencil/core'

@Component({
    tag: 'sb-card-content',
    styleUrl: 'sbcard-content.css'
})
export class SbCardContent {

    render() {
        return (
            <div class="sb-card-content">
                <slot />
            </div>
        );
    }

}