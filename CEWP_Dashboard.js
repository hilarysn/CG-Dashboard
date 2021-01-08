var DCOS = DCOS || {};
DCOS.DASHBOARD = DCOS.DASHBOARD || {};

DCOS.DASHBOARD.Home = function () {
    function Init(site) {
        loadscript(site + '/SiteAssets/js/vuecomponents.js', function () {
            new Vue({
                el: '#app',
                components: {
                    'dashboard-layout': DashboardLayout
                }
            })
        });
    }

    return {
        Init: Init
    }
}

SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs('CEWP_Dashboard.js');