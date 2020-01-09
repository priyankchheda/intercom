python3 -m venv venv
. venv/bin/activate
pip install --editable .
pip install coverage

chmod +x test.sh

./test.sh
