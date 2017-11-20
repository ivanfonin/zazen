<template>

    <div class="uk-offcanvas-content">

        <router-view></router-view>

        <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">

                    <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-nav-header">General</li>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="pro">Pro</router-link></li>
                        <li><router-link to="home">Home</router-link></li>
                        <li><router-link to="download">Download</router-link></li>
                    </ul>
                    
                </div>
            </div>
        </div>

    </div>

</template>
