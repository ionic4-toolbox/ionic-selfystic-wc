import { Component } from '@stencil/core';

@Component({
    tag: 'app-selfy-card-list',
    styleUrl: 'selfy-card-list.scss'
})
export class SelfyCardList {

    private selfies: any[] = [];

    componentWillLoad() {
        this.selfies.push(
            { img: 'assets/icon/icon.png' },
            { img: 'assets/icon/icon.png' },
            { img: 'assets/icon/icon.png' },
            { img: 'assets/icon/icon.png' },
            { img: 'assets/icon/icon.png' }
        );
    }

    liked(e: CustomEvent) {
        console.log('selfy-card-list:liked', e);
    }

    shared(e: CustomEvent) {
        console.log('selfy-card-list:shared', e);
    }

    render() {
        return (
            <ion-slides>
                {this.selfies.map((selfy: any) => (
                    <ion-slide padding>
                        <app-selfy-card model={selfy} onLiked={(e: CustomEvent) => this.liked(e)} onShared={(e: CustomEvent) => this.shared(e)}></app-selfy-card>
                    </ion-slide>
                ))}
            </ion-slides>
        );
    }
};