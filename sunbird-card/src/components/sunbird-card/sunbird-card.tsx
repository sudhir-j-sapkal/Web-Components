import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'sunbird-card',
  styleUrl: 'sunbird-card.css',
  shadow: true
})
export class SunbirdCardComponent {

  @Prop() cardTitle: string;
  @Prop() cardDescription: string;
  @Prop() cardImage: string;
  @Prop() cardProgress: number;
  @Prop() cardButtonName: string;
  @Prop() cardButtonUrl: string;

  render() {
    return (
      <div class="card">
        <img class="card-img-top" src={this.cardImage} alt=""/>
          <div class="card-body">
            <h5 class="card-title">{this.cardTitle}</h5>
            <p class="card-text">{this.cardDescription}</p>
            <a href='{this.cardButtonUrl}' class="btn btn-primary">{this.cardButtonName}</a>
          </div>
      </div>
    );
  }
}
