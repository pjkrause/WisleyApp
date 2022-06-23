import { Injectable } from '@nestjs/common';

@Injectable()
export class WalksService {
    private walks = [
        {
            id: 'winterWalk',
            description: 'short circular walks for the winter months',
            route: [
                [51.3147138, -0.4753819],
                [51.3147868, -0.4755869],
                [51.3148215, -0.4757998],
                [51.3148677, -0.4762813],
                [51.3148059, -0.4764930],
                [51.3145677, -0.4769495],
                [51.3144471, -0.4775942],
                [51.3145618, -0.4775989],
                [51.3146794, -0.4776318],
                [51.3147530, -0.4775622],
                [51.3148650, -0.4775281],
                [51.3152356, -0.4775494],
                [51.3154303, -0.4772721],
                [51.3154756, -0.4770801],
                [51.3155076, -0.4764530],
                [51.3155689, -0.4762056],
                [51.3156249, -0.4761203],
                [51.3157049, -0.4757662],
                [51.3157023, -0.4751135],
                [51.3158419, -0.4748983],
                [51.3158444, -0.4747196],
                [51.3158850, -0.4745612],
                [51.3158952, -0.4744354],
                [51.3159992, -0.4742892],
                [51.3160754, -0.4740415],
                [51.3161261, -0.4737816],
                [51.3161109, -0.4735704],
                [51.3159383, -0.4736273],
                [51.3158088, -0.4738345]
            ]
        }
    ];

    getWalks() {
        return this.walks;
    }
}