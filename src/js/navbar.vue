<template>

    <div class="uk-navbar-container" uk-sticky="media: 960">
        <div class="uk-container uk-container-expand">
            <nav class="uk-navbar">

                <div class="uk-navbar-left">
                    <router-link class="uk-navbar-item uk-logo" to="/">
                        Haiku
                    </router-link>
                </div>

                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav uk-visible@m">
                        <router-link to="/pro" tag="li"><a>Pro</a></router-link>
                        <router-link to="/error" tag="li"><a>Error</a></router-link>
                    </ul>
                    <div class="uk-navbar-item uk-visible@m">
                        <router-link class="uk-button uk-button-default tm-button-default uk-icon" to="/" activeClass="page-active">
                            Download
                        </router-link>
                    </div>
                    <a class="uk-navbar-toggle uk-hidden@m" data-uk-navbar-toggle-icon href="#offcanvas" data-uk-toggle></a>
                </div>

            </nav>
        </div>
    </div>

</template>
