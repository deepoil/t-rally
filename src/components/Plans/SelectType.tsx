import React from 'react';
import MediaCard from '../Utils/MediaCard';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

export default function SelectType() {
    return (
        <Grid container spacing={3}>
            <Grow in={true}>
                <Grid item xs>
                    <MediaCard
                        to='/plan/new'
                        cardMedia={{
                            image: '/static/images/create-travel-plan.jpg',
                            title: 'new travel plan card'
                        }}
                        contents={{
                            title: 'Create New Plan',
                            body: '全ての人に共有する旅行計画を新規で作成します。'
                        }}
                    />
                </Grid>
            </Grow>
            <Grow in={true} timeout={750}>
                <Grid item xs>
                    <MediaCard
                        to='/'
                        cardMedia={{
                            image: '/static/images/create-travel-plan.jpg',
                            title: 'edit travel plan card'
                        }}
                        contents={{
                            title: 'Edit Plan',
                            body: '未完成の旅行計画を編集します。'
                        }}
                    />
                </Grid>
            </Grow>
            <Grow in={true} timeout={1250}>
                <Grid item xs>
                    <MediaCard
                        to='/'
                        cardMedia={{
                            image: '/static/images/create-travel-plan.jpg',
                            title: 'create local travel plan card'
                        }}
                        contents={{
                            title: 'Create Local Plan',
                            body: '指定したユーザのみに共有される、これからの旅行計画を新規で作成します。'
                        }}
                    />
                </Grid>
            </Grow>
        </Grid>
    )
}