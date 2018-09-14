import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'sb-card',
    styleUrl: 'sbcard.css',
    host: {
		theme: ''
	}
})
export class SbCard {

  @Prop() sbClass: string;
  componentWillLoad() {}
  componentDidLoad() {}
  componentWillEnter() {}
  componentDidEnter() {}
  componentWillLeave() {}
  componentDidLeave() {}
  componentDidUnload() {}
  
  hostData() {
    return {
      class: {
        'card-class': this.sbClass
      }
    };
  }
  render() {
        return (
            <div class="sb-card">
                <slot />
            </div>
        );
    }
    
}
