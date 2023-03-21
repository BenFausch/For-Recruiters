
/**
 * Exercise #9
 *
 * @returns {*}
 */
function Exercise9() {
    return (
        <div>
            <pre>
              {`// Assuming this codebase uses Apollo client, and useBar is a hook around a GraphQL query,
// write a unit test that check that Foo renders the error state when useBar throws an error


import { useBar } from './queries.ts';
...

const Foo = () => {
  const [data, { error, loading } = useBar();

  return (
    <Page>
      ...
    </Page>
  );
}`}
</pre>
          
          
            <p>Rather than set up a huge GQL install just for this example test, I wrote a couple examples:</p>
            <h2>Solution #1</h2>
            <p> I would most likely want to test the component itself, like from the Apollo docs, you use their <code>react-testing</code> library to pull in the query function as well as mock the actual call to GQL, something like as seen below:</p>
            
            <pre>
              {`

            import { MockedProvider } from '@apollo/react-testing';
            
            import { TEST_USEBAR_QUERY } from './queries';
            import Foo from './foo'
            
            const mocks = [
              {
                request: {
                  query: TEST_USEBAR_QUERY,
                  variables: {
                    name: 'test',
                  },
                },
                result: {
                  data: {
                    ...expected_data
                  },
                },
              },
            ];
            
            it('renders without error', () => {
              renderer.create(
                <MockedProvider mocks={mocks} addTypename={false}>
                  <Foo/>
                </MockedProvider>,
              );
            });`}
            </pre>

            <h2>Solution #2</h2>
            <p>A hook is still testable using jest, something like this modified example from @devGenius:</p>
            
            <pre>
              {`
            import { useQuery, QueryResult } from '@apollo/client';
            import { type1, type2 } from '~/types/graph';
            import useBar from '..';
            
            jest.mock('@apollo/client', () => ({
              useQuery: jest.fn(),
            }));
            
            describe('<useBar>', () => {
              let result: Partial<QueryResult<type1, type2>>;
            
              beforeEach(() => {
                result = {
                  data: null,
                  loading: null,
                  error: null,
                };
                (useQuery as jest.Mock).mockImplementationOnce(() => result);
              });
            
              describe('setup', () => {
                it('calls the useQuery hooks', () => {
                  useBar('1');
            
                  expect(useQuery).toHaveBeenCalledTimes(1);
                });
              });
            
              describe('when useQuery returns error', () => {
                it('returns the error', () => {
                  result = {
                    data: {
                     /*...data here*/
                    },
                    loading: false,
                  };
            
                  const { test } = useBar('1');
            
                  expect( test ).toEqual(describedErrorObj);
                });
              });
            });
            `}
            </pre>
        </div>
    )
}

export default Exercise9;