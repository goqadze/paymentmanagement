#### Quick Installation

```bash
    git clone https://github.com/goqadze/paymentmanagement

    cd paymentmanagement
    
    cp .env.example .env
    
    touch database/database.sqlite

    composer install

    php artisan migrate --seed

    php artisan serve
```
