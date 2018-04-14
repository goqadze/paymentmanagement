<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Payments</title>

    <script src="/js/libs/polyfills/webcomponents-lite.js"></script>

    <link rel="import" href="/webcomponents/payment_item.html" id="paymentTemplate">

    <script>
        window.addEventListener('load', e => {
            document.getElementById('btn').addEventListener('click', evt => {
                document.getElementById('payment').visible = !document.getElementById('payment').visible;
            })
        })
    </script>
</head>
<body>
    <payment-item id="payment" visible >
        This is a payment item

        <span slot="title">Hey there!</span>
    </payment-item>

    <button id="btn">Toggle</button>
</body>
</html>
