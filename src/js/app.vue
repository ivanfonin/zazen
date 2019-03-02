<template>

    <div>

        <router-view></router-view>

        <div id="offcanvas" data-uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">
                    <ul class="uk-nav uk-nav-default">
                        <router-link to="/" tag="li"><a>Homepage</a></router-link>
                        <router-link to="/pro" tag="li"><a>Pro</a></router-link>
                        <router-link to="/erorr" tag="li"><a>Error</a></router-link>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>
