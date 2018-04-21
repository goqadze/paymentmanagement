<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Payments</title>

    <link href='http://fonts.googleapis.com/css?family=Oxygen:400,300' rel='stylesheet' type='text/css'>
    <script src="/js/libs/polyfills/webcomponents-lite.js"></script>

    <link rel="import" href="/webcomponents/layout-elements/app-wrapper.html">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <app-wrapper></app-wrapper>

    <div id="add-payment" class="overlay">
        <div class="popup">
        </div>
    </div>
</body>
</html>
