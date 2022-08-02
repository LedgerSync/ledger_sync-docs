# deposit

## LedgerSync::Ledgers::NetSuite::Deposit

## Attributes

| Name             | Type                            |
|------------------|---------------------------------|
| external_id      | LedgerSync::Type::ID            |
| ledger_id        | LedgerSync::Type::ID            |
| memo             | LedgerSync::Type::String        |
| transaction_date | LedgerSync::Type::Date          |
| exchange_rate    | LedgerSync ::Type::Float        |
| account          | LedgerSync::Type::ReferenceOne  |
| department       | LedgerSync::Type::ReferenceOne  |
| currency         | LedgerSync::Type::ReferenceOne  |
| line_items       | LedgerSync::Type::ReferenceMany |

## Operations

## Searchers

There are no searchers for this resource.
