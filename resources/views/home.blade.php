<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Payments</title>
    <script src="/js/libs/polyfills/webcomponents-lite.js"></script>

    <link rel="import" href="/webcomponents/test-component.html">
    <link rel="import" href="/webcomponents/layout-elements/app-wrapper.html">

</head>
<body>
    <app-wrapper></app-wrapper>


    <test-component id="test" visible type="critical">
        This is a payment item

        <span slot="title">Hey there!</span>
    </test-component>
    <button id="btn">Toggle</button>

    <script>
        window.addEventListener('load', e => {
            document.getElementById('btn').addEventListener('click', evt => {
                let node = document.getElementById('test');
                node.visible = !node.visible;
            })
        })
    </script>
</body>
</html>
