import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaCard from './Utils/MediaCard';

export default function Home() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                    <MediaCard
                        to='/plan/selectType'
                        cardMedia={{
                            image: '/static/images/home-share.png',
                            title: 'share card'
                        }}
                        contents={{
                            title: 'Share',
                            body: 'あなたが実際に訪れた旅行先での時間を共有しよう'
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <MediaCard
                        to='/'
                        cardMedia={{
                            image: '/static/images/home-share.png',
                            title: 'view card'
                        }}
                        contents={{
                            title: 'View',
                            body: '誰かがどこかで体験した出来事を見てみよう'
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <MediaCard
                        to='/'
                        cardMedia={{
                            image: '/static/images/home-share.png',
                            title: 'share card'
                        }}
                        contents={{
                            title: 'MyNote',
                            body: 'まいぺーじ'
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}