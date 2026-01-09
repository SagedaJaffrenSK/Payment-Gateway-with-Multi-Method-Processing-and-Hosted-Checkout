Documentation of table relationships and structure.

Table	        Column	    Type	    Constraints
merchants	   id UUID	   Primary         Key
                api_key	    TEXT    Unique (e.g., key_test_abc123)
orders	          id	    TEXT	    Primary Key
                amount	    INTEGER	    Amount in paise
                status	     TEXT	    'created' or 'paid'
