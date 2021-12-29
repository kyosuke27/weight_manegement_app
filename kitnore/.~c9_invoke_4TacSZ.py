import boto3
import json

print('Loading function')
dynamo = boto3.client('dynamodb')


def respond(err, res=None):
    return {
        'statusCode': '400' if err else '200',
        'body': err.message if err else json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
        },
        'body':'<html><body>OK</body></html>'
    }


def lambda_handler(event, context):
    print(event)
    isOk=check_login(event['login_id'],event['login_password']);
    if
        body='<html><body>OK</body></html>'
    else:
        body='<html><body>NG</body></html>'
    return {
        'statusCode': '200',
        'headers': {
            'Content-Type': 'text/html',
        },
        'body':'<html><body>OK</body></html>'
    }

def check_login(login_id,login_password):
    
    check_flag=False
    if login_id=='login' and login_id=='password':
        check_flag=True
    
    return check_flag