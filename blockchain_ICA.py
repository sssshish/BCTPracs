#Creating a Blockchain in Python
# Class Blockchain with two lists - chain and current transactions
import hashlib
import json
class Blockchain:
    def __init__(self):
        self.chain = list();
        self.currentTransactions = list();
    @property
    def last_block(self):
        return self.chain[:-1]
    def new_block(self, previous_hash='1', proof=100):
        index =1;
        timestamp = 0;
        transactions = list();
        newblock = {
            'index': index,
            'timestamp': timestamp,
            'transactions':transactions,
            'proof':proof,
            'previous_hash':previous_hash
        }
        currentTransactions = list();
        self.chain.append(newblock)
        return newblock
    def new_transaction(self,sender, recipient, amount):
        transactionDetails = {
            'sender':sender,
            'recipient':recipient,
            'amount':amount
        }
        self.currentTransactions.append(transactionDetails)
        #return self.last_block['index']+1
        return self.currentTransactions
    @staticmethod
    def hash(block):
        block_string = json.dumps(block, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()
    def proof_of_work(self,last_proof):
        proof=0
        while self.valid_proof(last_proof, proof) is False:
            proof += 1
        return proof
    @staticmethod
    def valid_proof(last_proof, proof):
        guess = f'{last_proof}{proof}'.encode()
        guess_hash = hashlib.sha256(guess).hexdigest()
        return guess_hash[:4] == "0000"

myBlockchain = Blockchain();
last_block = myBlockchain.last_block
#last_proof = last_block['proof']
myBlockchain.new_transaction(sender='0', recipient='minder_address', amount = 1)
myBlockchain.new_transaction(sender='1', recipient='minder_address1', amount = 12)
myBlockchain.new_transaction(sender='2', recipient='minder_address2', amount = 11)
previous_hash = myBlockchain.hash(last_block)
block = myBlockchain.new_block(previous_hash)
print(myBlockchain)
print(myBlockchain.currentTransactions)