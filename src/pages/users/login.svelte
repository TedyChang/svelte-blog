<script>
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Button, { Label } from '@smui/button';

  export let email = ""
  export let password = ""
</script>
<div>login</div>
<LayoutGrid>
    <Cell>
        <div class="columns margins">
            <div>
                <div>
                    <Textfield variant="outlined" invalid bind:value={email} label="Invalid">
                        <HelperText slot="helper">Email</HelperText>
                    </Textfield>
                    <Textfield type="password" variant="outlined" invalid bind:value={password} label="Invalid">
                        <HelperText slot="helper">Password</HelperText>
                    </Textfield>
                </div>
                <Button color="secondary" class="myClass">
                    <Label>Login</Label>
                </Button>
            </div>
        </div>
    </Cell>
</LayoutGrid>